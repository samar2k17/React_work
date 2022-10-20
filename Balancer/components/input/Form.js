import Form from 'react-bootstrap/Form';

function InputSizesExample() {
  return (
    <>
      <Form.Control type="text" placeholder="Normal text" />
      <br />
      <Form.Control
        type="text"
        placeholder="Disabled input"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
      <br />
      
      <Form.Control type="text" placeholder="Readonly input here..." readOnly />
      <br/>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <br/>
      <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#563d7c"
        title="Choose your color"
      />
      
    </>
  );
}

export default InputSizesExample;
