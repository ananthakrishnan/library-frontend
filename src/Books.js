import "./Books.css";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./Navbar";
import { Form, Grid, Segment } from "semantic-ui-react";
function Books() {
  return (
    <>
      <Navbar />
      <Grid columns="equal">
        <Grid.Column>
          <Segment>
            <div>
              <table class="ui mb-10 table ">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Approved</td>
                    <td>
                      John is an interesting boy but sometimes you don't really
                      have enough room to describe everything you'd like
                    </td>
                    <button class="ui primary button">Assign</button>
                    <button class="ui red button">Discard</button>
                  </tr>
                  <tr>
                    <td>Jamie</td>
                    <td>Approved</td>
                    <td>
                      Jamie is a kind girl but sometimes you don't really have
                      enough room to describe everything you'd like
                    </td>
                    <button class="ui primary button">Assign</button>
                    <button class="ui red button">Discard</button>
                  </tr>
                  <tr>
                    <td>Jill</td>
                    <td>Denied</td>
                    <td>
                      Jill is an alright girl but sometimes you don't really
                      have enough room to describe everything you'd like
                    </td>
                    <button class="ui primary button">Assign</button>
                    <button class="ui red button">Discard</button>
                  </tr>

                  <th colspan="4" className="rounded-3xl"></th>
                </tbody>
              </table>
            </div>
          </Segment>
        </Grid.Column>
      </Grid>

      <br />
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
}

export default Books;
