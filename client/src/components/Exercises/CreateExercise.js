import React ,{ useState }from "react";
import { Form, Button } from "react-bootstrap";
import { useQuery, gql, useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const CreateExerciseContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .new-exercise-submit {
    margin-top: 20px;
    text-align: center;
  }
`;
const GET_EXERCISE_ATTRIBUTES = gql`
  query GET_EXERCISE_ATTRIBUTES {
    categories {
      id
      name
    }
    muscles {
      name
      id
    }
  }
`;
const CREATE_EXERCISE = gql`
  mutation CREATE_EXERCISE($name: String!,$category: String!,  $muscles: String!) {
    createExercise(name: $name, category: $category, muscles: $muscles ) {
      id
      name
      category {
        name
      }
      muscles {
        name
      }
    }
  }
`

function CreateExercise() {
  const { loading, error, data } = useQuery(GET_EXERCISE_ATTRIBUTES);
  const [ createExercise, {data: d} ] = useMutation(CREATE_EXERCISE);
  const [newExercise, setExercise] = useState(null);

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      const {name, category, muscle} = newExercise;
      console.log(name, category, muscle)
      createExercise({variables: {name, category, muscles: muscle}})
    }}>
      <CreateExerciseContainer>
        <div className="new-exercise-control">
          <Form.Label controlid="name">Exercise Name</Form.Label>
          <Form.Control type="text" placeholder="Enter exercise name" onChange={({target: {value: name}}) => {setExercise({...newExercise, name})}} />
        </div>
        <div className="new-exercise-control">
          <Form.Label controlid="category">Category</Form.Label>
          <Form.Control as="select" value={newExercise?.category} onChange={({target: {value: category}}) => {setExercise({...newExercise, category})}}>
            {loading && <option>Loading...</option>}
            {error && <option>Error...</option>}
            {data &&
              data.categories.map(({ name, id }) => (
                <option key={`${uuidv4()}`} value={name}>{name}</option>
              ))}
          </Form.Control>
          
        </div>

        <div className="new-exercise-control">
          <Form.Label controlid="muscle">Muscle</Form.Label>
          <Form.Control as="select" value={newExercise?.muscle} onChange={({target: {value: muscle}}) => {setExercise({...newExercise, muscle})}}>
            {loading && <option>Loading...</option>}
            {error && <option>Error...</option>}
            {data &&
              data.muscles.map(({ name, id }) => (
                <option key={`${uuidv4()}`} value={name}>{name}</option>
              ))}
          </Form.Control>
          
        </div>
        <div className="new-exercise-submit new-exercise-control">
          <Button
            variant="outline-primary"
            type="submit"
          >
            Create Exercise
          </Button>
        </div>
      </CreateExerciseContainer>
    </Form>
  );
}

export default CreateExercise;
