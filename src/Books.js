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
                    <th>Book</th>
                    <th>Author</th>
                    <th>Short Description</th>
                    <th>Detailed Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Catcher in the Rye</td>
                    <td>J.D. Salinger</td>
                    <td>
                      A novel about a teenage boy named Holden Caulfield who has
                      been expelled from his prep school.
                    </td>
                    <td>
                      The Catcher in the Rye is a novel by J.D. Salinger
                      published in 1951. The novel's protagonist, Holden
                      Caulfield, is a teenage boy who has been expelled from his
                      prep school. The novel follows Holden over the course of a
                      few days as he wanders the streets of New York City,
                      reflecting on his life and trying to come to terms with
                      the adult world. The novel has been praised for its
                      honesty, its portrayal of adolescence, and its exploration
                      of themes such as alienation and loss.
                    </td>
                    <td>
                      <button class="ui primary button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td>The Hitchhiker's Guide to the Galaxy</td>
                    <td>Douglas Adams</td>
                    <td>
                      A comic science fiction series that follows the
                      misadventures of an unwitting human and his alien friend.A
                      comic science fiction series that follows the
                      misadventures of an unwitting human and his alien friend.
                    </td>
                    <td>
                      The Hitchhiker's Guide to the Galaxy is a comic science
                      fiction series by Douglas Adams published in 1979. The
                      series follows the misadventures of an unwitting human
                      named Arthur Dent and his alien friend Ford Prefect as
                      they travel through space and time. The series has been
                      praised for its humor, its creativity, and its exploration
                      of themes such as the meaning of life."
                    </td>
                    <td>
                      <button class="ui primary button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td>The Lord of the Rings</td>
                    <td>J.R.R. Tolkien</td>
                    <td>
                      An epic fantasy novel that follows the journey of a hobbit
                      named Frodo Baggins to destroy a powerful ring.
                    </td>
                    <td>
                      The Lord of the Rings is an epic fantasy novel by J.R.R.
                      Tolkien published in 1954. The novel follows the journey
                      of a hobbit named Frodo Baggins as he and a fellowship of
                      others set out to destroy a powerful ring. The novel has
                      been praised for its world-building, its themes of heroism
                      and sacrifice, and its influence on the fantasy genre.
                    </td>
                    <td>
                      <button class="ui primary button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td>To Kill a Mockingbird</td>
                    <td>Harper Lee</td>
                    <td>
                      A novel about racial injustice and the loss of innocence
                      in a small Southern town.
                    </td>
                    <td>
                      To Kill a Mockingbird is a novel by Harper Lee published
                      in 1960. The novel is set in the 1930s in a small Southern
                      town and follows the story of a young girl named Scout as
                      she learns about racial injustice and the loss of
                      innocence. The novel has been praised for its portrayal of
                      race relations, its exploration of themes such as courage
                      and compassion, and its influence on American literature.
                    </td>
                    <td>
                      <button class="ui primary button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td>1984</td>
                    <td>George Orwell</td>
                    <td>
                      A dystopian novel about a totalitarian society in which
                      individuality and free will are suppressed.
                    </td>
                    <td>
                      1984 is a dystopian novel by George Orwell published in
                      1949. The novel is set in a totalitarian society in which
                      individuality and free will are suppressed, and follows
                      the story of a man named Winston Smith who rebels against
                      the oppressive regime. The novel has been praised for its
                      portrayal of the dangers of totalitarianism, its
                      exploration of themes such as the power of language and
                      the manipulation of truth, and its influence on popular
                      culture.
                    </td>
                    <td>
                      <button class="ui primary button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td>The Great Gatsby</td>
                    <td>F. Scott Fitzgerald</td>
                    <td>
                      A novel about the decadence and excess of the Jazz Age in
                      America.
                    </td>
                    <td>
                      The Great Gatsby is a novel by F. Scott Fitzgerald
                      published in 1925. The novel is set in the 1920s in
                      America and follows the story of a man named Jay Gatsby
                      and his pursuit of the American Dream. The novel has been
                      praised for its portrayal of the decadence and excess of
                      the Jazz Age, its exploration of themes such as the
                      corruption of the American Dream and the power of
                      illusion, and its influence on American literature.
                    </td>
                    <td>
                      <button class="ui primary button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Pride and Prejudice</td>
                    <td>Jane Austen</td>
                    <td>
                      A novel about love and marriage in Georgian England.
                    </td>
                    <td>
                      Pride and Prejudice is a novel by Jane Austen published in
                      1813. The novel is set in Georgian England and follows the
                      story of Elizabeth Bennet and her relationship with the
                      proud Mr. Darcy. The novel has been praised for its witty
                      dialogue, its exploration of themes such as love and
                      social class, and its enduring popularity.
                    </td>
                    <td>
                      <button class="ui primary button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td>The Picture of Dorian Gray</td>
                    <td>Oscar Wilde</td>
                    <td>
                      A novel about the corrupting influence of beauty and
                      pleasure.
                    </td>
                    <td>
                      The Picture of Dorian Gray is a novel by Oscar Wilde
                      published in 1890. The novel follows the story of a young
                      man named Dorian Gray who becomes corrupted by the pursuit
                      of beauty and pleasure. The novel has been praised for its
                      exploration of themes such as the nature of art, the
                      corrupting influence of beauty, and the dangers of excess.
                    </td>
                    <td>
                      <button class="ui primary button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td>The Color Purple</td>
                    <td>Alice Walker</td>
                    <td>
                      A novel about the struggles and resilience of black women
                      in the American South.
                    </td>
                    <td>
                      The Color Purple is a novel by Alice Walker published in
                      1982. The novel is set in the American South in the early
                      20th century and follows the story of a young black woman
                      named Celie as she navigates the challenges of life as a
                      woman of color. The novel has been praised for its
                      portrayal of the struggles and resilience of black women,
                      its exploration of themes such as race, gender, and
                      sexuality, and its influence on American literature.
                    </td>
                    <td>
                      <button class="ui primary button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td>One Hundred Years of Solitude</td>
                    <td>Gabriel Garcia Marquez</td>
                    <td>
                      A novel about the history of a mythical town and the
                      Buendia family.
                    </td>
                    <td>
                      One Hundred Years of Solitude is a novel by Gabriel Garcia
                      Marquez published in 1967. The novel is set in the
                      mythical town of Macondo and follows the story of the
                      Buendia family over the course of several generations. The
                      novel has been praised for its magical realism, its
                      exploration of themes such as the cyclical nature of time
                      and the nature of human memory, and its influence on Latin
                      American literature.
                    </td>
                    <td>
                      <button class="ui primary button">Assign</button>
                    </td>
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
                    <input type="text" placeholder="Book Name" />
                  </div>

                  <div className="field">
                    <label>Author</label>
                    <input type="text" placeholder="Author" />
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
