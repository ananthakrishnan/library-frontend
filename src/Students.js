import { Form, Grid, Segment } from "semantic-ui-react";
import React from "react";
const Student = () => {
  return (
    <>
      <Grid columns="equal">
        <Grid.Column>
          <Segment>
            <form>
              <div className="ui form pb-15 stackable ">
                <div className="three fields">
                  <div className="field">
                    <label>Book Name</label>
                    <input type="text" placeholder="First Name" />
                  </div>

                  <div className="field">
                    <label>Author</label>
                    <input type="text" placeholder="Middle Name" />
                  </div>
                  <div class="field">
                    <label>Short Description</label>
                    <textarea rows="2"></textarea>
                  </div>
                  <div class="field">
                    <label>Detailed Description</label>
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
