/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Title from "../common/title";
import { Buttons } from "./../table/buttons";
import { Container, Header, Segment } from "semantic-ui-react";

class termsOfService extends Component {
  render() {
    return (
      <div className="mt-5">
        <Title title="Terms Of Services" center="true" />
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text>
            <Header as="h6" style={{ fontSize: "1.2em" }}>
              1.0 Your Intellectual Property
            </Header>
            <p style={{ fontSize: "1em" }}>
              As between SLExpress and you, you shall own all intellectual
              property pertaining to your User Content and to any other
              materials created by you, including to any designs, images,
              animations, videos, audio files, fonts, logos, illustrations,
              compositions, artworks, code, interfaces, text and literary works.
              SLExpress does not claim ownership rights on your content. For the
              sole purpose of granting you the service, You know and agree that
              we will need to access, upload and/or copy your User Content to
              our platform, including cloud services and CDN’s, to make display
              adjustments, to duplicate for backup and perform any other
              technical actions and/or uses required to perform our services, as
              we deem fit.
            </p>
            <Buttons color="#40a3dc" name="More" className="center" />
            <br />
            <br />
            <Header as="h6" style={{ fontSize: "1.2em" }}>
              2.0 You agree and undertake not to
            </Header>
            <p style={{ fontSize: "1" }}>
              submit, transmit or display any User Content, or use Licensed
              Content in a context, which may be deemed as defamatory, libelous,
              obscene, harassing, threatening, incendiary, abusive, racist,
              offensive, deceptive or fraudulent, encouraging criminal or
              harmful conduct, or which otherwise violates the rights of
              SLExpress or any third party (including any intellectual property
              rights, privacy rights, contractual or fiduciary rights), or
              otherwise shows any person, entity or brand in a bad or
              disparaging light, without their prior explicit approval.
            </p>
            <Buttons color="#40a3dc" name="More" className="center" />
            <br />
            <br />
            <Header as="h6" style={{ fontSize: "1.2em" }}>
              3.0 SLExpress’s Intellectual Property
            </Header>
            <p style={{ fontSize: "1em" }}>
              All rights, title and interest in and to the SLExpress Services,
              including any and all copyrightable materials or any other content
              thereof which is or may be subject to any intellectual property
              rights under any applicable law (including any artwork, graphics,
              images, website templates and widgets, literary work, source and
              object code, computer code (including html), applications, audio,
              music, video and other media, designs, animations, interfaces,
              documentation, derivatives and versions thereof, the “look and
              feel” of the Wix Services, methods, products, algorithms, data,
              interactive features and objects, advertising and acquisition
              tools and methods, inventions, trade secrets, logos, domains,
              customized URLs, trademarks, service marks, trade names and other
              proprietary identifiers, whether or not registered and/or capable
              of being registered (collectively, “Intellectual Property”), and
              any derivations thereof, are owned by and/or licensed toSLExpress.
            </p>
            <Buttons color="#40a3dc" name="More" className="center" />
          </Container>
        </Segment>
      </div>
    );
  }
}

export default termsOfService;
