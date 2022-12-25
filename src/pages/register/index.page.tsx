import {Container, Header, Form} from "./styes";
import {Button, Heading, MultiStep, Text, TextInput} from "@ignite-ui/react";
import {ArrowFatLineRight} from "phosphor-react";

export default function Register() {
  return (
    <>
      <Container>
        <Header>
          <Heading as="strong">G-My Free Time Slots</Heading>
          <Text>
            Hang in there! We need some information before going on.
             You can edit it later.
          </Text>

          <MultiStep  size={4} currentStep={1}/>
        </Header>

        <Form as="form">
          <label>
            <Text size="sm">Username</Text>
            <TextInput prefix="myslots.com/" placeholder="your-username" />
          </label>
          <label>
            <Text size="sm">Full name</Text>
            <TextInput prefix="myslots.com/" placeholder="your-username" />
          </label>
          <Button type="submit">
            Next
            <ArrowFatLineRight />
          </Button>
        </Form>
      </Container>
    </>
  )
}