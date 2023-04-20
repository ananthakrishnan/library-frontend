import React from "react";
import { Form, Grid, Segment } from "semantic-ui-react";
import Navbar from "./Navbar";
const Student = () => {
  return (
    <>
      <Navbar />
      <Grid columns="equal">
        <Grid.Column>
          <Segment>
            <form>
              <div className="ui form pb-15 stackable ">
                <div className="three fields">
                  <div className="field">
                    <label>Student Name</label>
                    <input type="text" placeholder="Student Name" />
                  </div>
                  <div class="field">
                    <label>Address</label>
                    <textarea rows="4"></textarea>
                  </div>
                </div>
              </div>
              <Form.Button>
                <div>Submit</div>
              </Form.Button>
            </form>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Student;
