
 import { LinkSt } from '../Navigation/Navigation.styled';
export const HomePage = () => {
    return (<>
          <p><b> PhoneBook</b> app is an easy to use contact manager app that gives you facility of saving and viewing your contacts, so that you never lose  <LinkSt to="/contacts">your contacts</LinkSt>.</p>
     
      <span role="img" aria-label="Greeting icon" style={{ fontSize: "40px" }}>
          ☎️
        </span>
          
          <p style={{fontWeight:"600", marginBottom:0}}>"Communication, an essential part of life,<br />
Enriches relationships and banishes strife,<br />
The sound of a phone call can bridge the miles,<br />
              Bringing us closer and lighting up our smiles."<br /></p>
        <span style={{ fontStyle: "italic", fontSize: "12px" }}> ( by ChatGTP)</span></>
    )
}