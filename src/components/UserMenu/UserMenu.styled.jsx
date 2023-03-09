import styled from '@emotion/styled'

export const Menu = styled.div`
@media screen and (max-width: 424px) {
     display: block;
     
     text-align:right;
}
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
`
export const Text = styled.div`
    
    margin: 0;
`
export const Butt = styled.div`
@media screen and (max-width: 424px) {
     margin-top:5px;
     margin-left: auto;
}
    /* background-color: #ffa600a7; */
     border: 1px solid orange;
    margin: 0;
    padding: 5px 5px;
    max-width:70px;
   
    border-radius: 8px;
    cursor: pointer;
    :hover{
          background-color: #ffa600;
     border: 1px solid orange;
    }
    
`