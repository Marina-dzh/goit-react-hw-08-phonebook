import { Container } from "../components/App/App.styled";
export default function Home() {
  return (
     <Container>
      <h1 >
        PhoneBook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          ☎️
        </span>
          </h1>
          <h3>"Communication, an essential part of life,<br />
Enriches relationships and banishes strife,,<br />
The sound of a phone call can bridge the miles,<br />
              Bringing us closer and lighting up our smiles."<br /></h3>
          <span> (by ChatGTP)</span>
    </Container>
  );
}
