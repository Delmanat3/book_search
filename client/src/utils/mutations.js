import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!,$email:String!,$password:String!){
    addUser(username: $username,email:$email,password:$password){
      token
        users{
            _id
            username
        }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($author: String!, $description: String!,$title: String!, $bookId: String!,$image: String, $link: String) {
    saveBook(author: $author, description: $description,title: $title, bookId: $bookId,image: $image, link: $link) {
      users{
        username
        savedBooks
      }
      
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      users {
        username
        
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      
      username
      savedBooks
    }
  }
`;
