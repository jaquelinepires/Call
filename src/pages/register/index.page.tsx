import { Container, Header, Form } from './styles'
import { Heading, Text, MultiStep, TextInput, Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="h1" size="4xl">
          Bem-vindo ao Call!
        </Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1}></MultiStep>
      </Header>
      <Form as="form">
        <label>
          <Text size="sm">Nome do usuário</Text>
          <TextInput prefix="ignite.com/" placeholder="seu-usuário" />
        </label>
        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="seu nome" />
        </label>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
