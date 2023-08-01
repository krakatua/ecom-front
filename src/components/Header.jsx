import { Link } from 'react-router-dom';
import styled from 'styled-components';



const StyledHeader = styled.header`
    background-color: #222;
    font-family: 'Roboto', sans-serif;
`;

function Header() {
  return (
    <StyledHeader>
        <Link to={'/'}>
            Ecommerce
        </Link>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>All Products</Link>
            <Link to={'/categories'}>Categories</Link>
            <Link to={'/account'}>Account</Link>
            <Link to={'/cart'}>Cart (0)</Link>
        </nav>
    </StyledHeader>
  )
}

export default Header