import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../auth/[...nextauth].api";
import { z } from 'zod';
import { prisma } from "@prisma/client";

const timeFramesBodySchema = z.object({
  frames: z.array(z.object({
    weekDay: z.number().min(0).max(6),
    startTimeInMinutes: z.number(),
    endTimeInMinutes: z.number(),
  }))
})


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,


) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await unstable_getServerSession(req, res, buildNextAuthOptions(req, res))

  if (!session) {
    return res.status(401).end()
  }


  const { frames } = timeFramesBodySchema.parse(req.body)

  await Promise.all(frames.map(frame => {
    return prisma.userTimeFrame.create({
      data: {
        week_day: frame.weekDay,
        time_start_in_minutes: frame.startTimeInMinutes,
        time_end_in_minutes: frame.endTimeInMinutes,
        user_id: session.user?.id,
      }
    })
  }))

  // todo: mgirate to sql to use that damn createMany - fuc you sqlite
  // await prisma.userTimeFrame.createmany({ data: frames.map(frame => ({ ...frame, userId: session.user.id })) })

  return res.status(201).end()
}

