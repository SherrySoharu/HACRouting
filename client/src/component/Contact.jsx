import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div class="container">
      <div style={{ textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>Swing by for a cup of coffee, or leave us a message:</p>
      </div>
      <div class="row">
        <div class="column">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATDxAPDxAQFhAPFRIPEBIWEA8VEBARGBMXGBUTFhUYHSglGBopGxYTJjMtJSkrLjouFx8zODMsNyotOi0BCgoKDg0OGhAQGi0lHR8tLS0tLS0tLS0tLS0tKy0tLS0tKy0tLS0tKy0tKysrLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABFEAACAQMBBQUFAwgHCQEAAAABAgADBBESBQYTITFBUWFxgQciMpGhFIKSFSMkQlJyc7ElMzZisrPBNDVTY6K0xOHwFv/EABgBAQEAAwAAAAAAAAAAAAAAAAABAgME/8QAGxEBAQEAAgMAAAAAAAAAAAAAAAERIXECMUH/2gAMAwEAAhEDEQA/AOUxETc4yIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICInmYHsREBERARE8BgexEQEREBE8zPYCIiAiJ5mB7ERAREQETzM9gIiICIiAieZnsBERAREQEREBERAy00ULrqfDnAGQC7doz2AZGT4geT7cR8BRP3QAfxfEfUy07gD+mrJOxNajz+zVCT+Iky07a3zvnp1bnZ9RSluWp3du1JGq25VivGB/XonHXs7e3FRy37aD8ehx25wG/GOfzyPCK1IABlOUbOD2gjGVPjzHoQfLsW7u9F2tW2o7RqKbi9ZRStlpqjUKRBPGrHqGIHJevPJ8OYbbH6ZtBMDHGuHAx0KVmP+EuPvSU1DzJRpaieeFUZZu4f6noB4mY5sFTw0VfiqMT54wqD5l/nCpDZGy7i4LfZKI0Uv6ys5phE8Xq1PdU+C4PPt6zfO7d6wJpVLS60c2SlcULioo7Tp+L8POTd/Z0QbmnWDHZ2w1pUhQVin2u+qYBdyO0uWyeoAGOpmgrWj7OudoU7Vbe6oVaNCiaVatoV2IYVUBOQ4XWDzI5DvlRU3pggsgIK/GnM4541DPPGeoPMeMwSyb11B9qtrkqA15a2t3cKBgGpUUrVOOzUBn7xldqppZlPVSVPocSK8RCSFAySQAO8noJt0aeXWlRTiVXIQHTrDOf1UQ8j5kH0mK25LUbtC6R5udJ/6dXzlu9kNJTtQFgMpRqung+VXI8dLPBUXvDsO+s1otcldNbUAoIdUK4yjLjSDg9mRIZdL8sBah+HHJHPcR0U+WB4DrLV7R94LypcVrK4FIU6FYugRCCRg8NyzEnmjDpjrKbFSBETPecyrdrqrH97ox9SCfWfNpTDVEU9CwB8s8/pCs1K3PL3GdyAwQBiFXsZ9PPny5cuzyn3i6HSnVUdcLRZF9Qqj6y++xW4zc3xZgGdKJxnGTrfOB6idUubxUKqxJZzpVQCzE6WboOzCsfSWRjfLLj8zisrcqij99VVWHjgYDevPxmOtSKnBx2EEdGB6EeEnL3c3aVNalWpaVFp0w1R21USFQZJbAbPSQx50ge1G0/dcFgPQq5+9IyYZlpU10l3Pug4AGNTtjOB3AZGT4jvmKWLd+g/GapSpcSpaUUejT0u44zugDMq8yFaq7fcEDNQ3erLSNavWoWqBGqBNLNc6FYLkqoLDLMq4ZgcnGB2fN9u/WFPjU6lC6pBUdtIZbhUZNauVYBsaQ3Qt8LZHunExtf7Tpu8bNLAV6VtTBtr5i9vTFYqxw/vDK0zkcssSckzJsoXP6F/R2g1Fr27kW98vC0VOLQPN/dAqMrZPccESihVqQADqSUbkO9T+y2O3+Y9QMUm9s25Ws2qnwzc0Uumo6GThVdJZ1CtzUa0rYH7LASEkH3RpajjOABqY9ir3/yHmRJbYWybi6q8GypAkDUzvpOgdjO5BCc+gUZ88SNPKkP77EnyUDSPmzfSXXd9XO79+tpk1+Ov2gL/AFht9KZxjmRjV6a4K1dr7l7Ro0WrlqFxTp5NTQ3FNMDqSHUHHfp5yqMispZBgqMsnMjH7Sk88d4PTrz54tfsjSt+UVajkUAlQXRx+a4ehtIbszr047evZmVe4qoLmo1LHCFWoaY/VNHWdI8inL1lRqxPuuml2X9lmX5HE+JFIiICIiAiIgWfcq8p0tq2dzWqKlL39bsQEVuA6EE9nvEfiEl7bY1GldNdW+39n06heo6kMhwrsSUYF8MOfQjslGo1cAqwyjcyM4IP7SnsM+uEp+GovkwZW+gI+sC/bF2Va0r+lfVtuWFVkqcWpmooeoSCPiL8uv0lP2xWVrm9rIwKVa1cUmHRw1UtqHho/wAa980RTQfE4P8AdQHJ82YAAeIz5T4rVS2OQAXkqjoo/wDu2BjmwpPDBU+9SYt5BtOk+QYH8YmvPulUKnI8ufMEHqCO0QOiV6y1ku7haFevYbTFKpcC30m6sLynjIZD1GcnJ5EEeutYXVrVtksKey9o1BSrm4RAV/SX0ac3NTHudTnSMAAc+sp1rclH4lCtUo1O8PVHb0DpzI8GHqZv3e372ouittGsyHqoq1m1DuwMA+pEIy7yq5v2avVpVKgCvcClk0bfSP8AZ1PQ6QFXlyyQM5zK+7Ekk9SST5mZHqjToQYXqc41OR0z3DuH85ihWe15607XGF8XBBA8zggeJE2t3drNa3VG6QZNJssuca0I0uvqpPrg9kjpsM6Pzc6XPVsZRj3sBzB8QD5dYHWt491KW1qlvf2lxTFJqeisdJLnScoAvY4yynJGMDrOab1bDa0vHtssyjS1JsDNRHHunA7c5HmJhsLutQJahdmnq6lKlZdXmoXJ9RPi72g7MXarUqVSNJq1GYso58kBJx1PPx5AS1Jw17s+9pGDoATPYSPiI8Mlp829TS6t2KQT4gHn9JjiRWxSdqFdKi4L0HSrTJGVJUhkbHceR9ZMbsbx8DaQ2hcipVY8TiEFeIxdCoPPAwMjl3CQqVVIC1M4X4WGNS+GD8S57MjwPf7wB2VaePvg/Ir/ACzA6rtz2kWdbZ1wqJVFWsKlqKTaA666TYqnBwU5YOOeSOXMTlT+7TVe1zxD+6BhP5ufIiF4a8ydZ7AAwp+pOCfLA85iqOWJZjknmTFqSSenzJjZlZdeKlTRTuqQoNVOcUKqFCtRsdgenTJ/uuZDzLRrYyCMo2NS9OY6EHsPM/OFXXb2x6ardl7koKtWnfjNCsdKlqlN1BHxYesg5dmk9GBOTZOyF02rpcjFtTrXBZqNVU1V9YpMxPwgBVc5/VUnpK5YbduKdM0aVypoEMOBXpq6AEYKgMrKBjuI8p5tLblesop17nNIYIo0kCU+QAXICqvIADJ1YwOXKVGHaFwpZmpkmlRppZ0GIILgLpL4PTV+dbHZrAkXMlarqwMYVeSqOgH+p7z/AOpjkVnHvUsdtNi33GwCfQgfiEmtxd4jZXiVSTwamKVwP+WTyfHep5+WR2yApVCpyOvzBHaCO0TKVptzDaD2qwYr91gCfQj1MDsPtW3jFC0FrRYcW8B1Ff1bc/E3L9roPDV3TjlsmXGfhHvOe5BzY/L64mauS5U1a6toVaa83ZhTUYVRgYwB0BImKpVGnQgIU/ETjU+OmcdB4fUy1JMjHVfUzMerEsfMnM+YiRSIiAiIgIiICIiAiIgJktrd6jrTpI7u3JUVSzMfACY51Ldcrs3Yb7TCK11dHTTLDIVS5Smv7vIue/p3RBTzuJtXTq+xVcd2qjq/Dqz9JA3FB0dkqKyupwyspVlPcQeknBvvtMVOJ9tras5xlOH5cPGnHpMOyNmXO0r1lVgatYtWrVG+FFz7zkDs5gADwHkTtCxOiLuPss1fsi7X/S88PTw04fFHIpjvznlqzKltLd+rb3q2VfAZnpoHXmrI7ACoueo5n1BEYqIidE2l7PbS1qk3u0RTtzgUfcHHqnHv+6M4AJ7j6SL3v3LS2tqd7aXHHtahC6sAMpOdJyOTAkEdAQYxNU/MTre7ewbFdiXWq8U07kobi4WmcUSpTFMA8zgnr3sZz3a2zbRLulQtrwVaFThhrgoQtNmcq2V7lGD6xhqGiX+33R2O1RbYbXZrhzoUrSXglycAA8wef9+VbePd+raXbWbkO/ucMqD+dV/gIHYSeWO8QuomJ0JtwbO3Sn+VNoijWqjUKSBTp7+ZBLc+3AE0tk7t2B2rTt12glSgDRqIeHk3Dls8AFSR0AyfEjEYmqVE6b7StlbPNzdV3vtF2Kastrw+TMKQ0Lq8cD5zmULG8dj3IthecF/sxOkVvd0E6ymOufiBHSadNCzBVGWYhVHeScAfOdGrf2Rp/wAY/wDevKDsr/aLf+NR/wAxYH1tXZVxbOKdzSam5UOFbGSpJAPI9Mg/Kac6J7YaDVNq21JBl6tCjTQd7NXqqo+ZE+LvcnZlsy0b/ajJcsocqlL3FB6ZJDcuR5kjp0EuJrn0SR2/Y0aFw9K3uFr01CkVVUBTqGcciQcZHTtkdIpERAREQEREBERAREQEREBERAREQE6lVpG63WpCiCz2hGtBzb807BuQ7dDBvKctk7upvXc2Ds1Aq1OpjiUnzocjowx8LeI9c8oiVAgjrnl39k6X7EWHGvQCOI1KkU8QGbOPUpNV/aHaauKNi2fHPM1DwidXfnhZMqtpvDXpXrX1EqlV3qVCuCaZDsWamRnmvP6CUvKPt6dXjIgzx+IqAc9XG1gAfvavrOme1dl/KuzQMaxwi/fpNwNOfk8jR7SKPE+0jZFoLz/j6l1asY1Z4erPrnxlRvdt1q12L2uddUVEqY6KAjAqij9VeWPrzOYPq2e2pz+UaS55LboQO4mrVyfoPlNt/wCyQ/i/+YZUt8d4zf3K3DUhTK01o6Q5fOGds5IH7f0mY71N+ShsvgjSH4nG4hz/AFvExo0+nWNMWfYn9lb7+I3+ZRlV3I3eF9eLbs5RAjVqjDGrQpUYXPLJLL18Ztbo75tZ0qttUt6de2rklqTHGCV0t1BBBAGQR2Txd8BSv6d7ZWdC3WmhotQXGiqhJLaiqrzPu88fqL16QJmlX2LSv6dtb7Or1KiXCUVrNd11/OiqF1BA2CAwz0HSSe+JX/8ATbP140/ovXpni1NP1xIK/wB/6ZZ61ps21oXdTJN1hHqKzfEy+4PePPmfrITezeRr25W6NMUmVEpgK5OCrMwYNgYOW+kCX9riuNq1C2cNSomn3aNJBx97XIfcY/0pY/x6f85YV9oy1aSJtHZ1tdPTHu1G0Ak95VkbBPLOMeUru2N4mq3lO8o0adA0RSFGnTxoThnK9gHU9wgSftW/3vcfu0P8lZUpd9u7+ULqk/G2XbG6em1IXBZWankEBlymeRJIGeXfKRJSOlKhfdLCDJpVWZwOqgXbMSfJWB8pQthUWe7tUQZZq1IADt98E/QE+QkpulvfcWBcU1SpRq86lF86WbGNQI+E4AHQ5AGRyGJ9faPRpans9k2lGswINQaO3v0IpYeolD2w3RXatF6bYejQouG5e44rVHU+fwmbdHenZm0zTpbUteHcnTSS5pkhck4A1DmoyTyYMozKG+16rXYvap4lYVUrtq+F2VgQpA6LhQMDslsXfqy1it+RLMVwQ4cMgGsHIfHC65598aYgt9d3fsN2bcOXRkWrTYgBtDFhhgOWQVPTwkDJLeLbda8uGua+NTAKqqMJTQdEHzJ59pMjZFIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB//Z"
            style={{ width: "100%" }}
          />
        </div>
        <div class="column">
          <form action="/action_page.php">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <label for="country">Country</label>
            <select id="country" name="country">
              <option value="australia">India</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "170px" }}
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
