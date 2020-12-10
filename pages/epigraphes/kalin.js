import { chakra, Flex, StyledStepper } from "@chakra-ui/react";
import styles from "./Email.module.css";

const Kalin = () => {
  return (
    <Flex
      direction="column"
      className={styles.email}
      fontSize="sm"
      fontWeight="medium"
    >
      <Flex>
        <span>Message: </span>
        <span>1</span>
      </Flex>
      <Flex>
        <span>Date: </span>
        <span>Fri, 19 Jul 2019 12:22:56 +0200</span>
      </Flex>
      <Flex>
        <span>From:&thinsp;</span>
        <span>
          Alex K?lin &lt;
          <a href="mailto:hello@natural-habitat.com">
            hello@natural-habitat.com
          </a>
          &gt;
        </span>
      </Flex>
      <Flex>
        <span>To: </span>
        <span>nettime-l@mail.kein.org</span>
      </Flex>
      <Flex>
        <span>Subject:&thinsp;</span>
        <span>
          &lt;nettime&gt; 'But is it art'? ? virtual exhibition about internet
          art
        </span>
      </Flex>
      <Flex>
        <span>Message-ID:&thinsp;</span>
        <span>
          &lt;8DE5B374-FE21-4082-9485-F980E6F324FF@natural-habitat.com&gt;
        </span>
      </Flex>
      <Flex>
        <span>Content-Type: </span>
        <span>text/plain; charset="utf-8"</span>
      </Flex>
      <chakra.div p={4}>
        Hello there, <br />
        The newly found virtual museum for internet art ‘Natural Habitat Museum’
        has opened it’s first show a few days ago. The show ‘But is it art?’
        aims to introduce new ways of looking at internet art and considering it
        equally qualified art, even though it hasn’t always been the case due to
        the medium it uses. We believe it is very much connected to art history
        because it reflects our society. After all, artists comment on the
        conditions of their time, and the internet is part of this. We are not
        saying we have the perfect answer to the question ‘But is it art?’ nor
        do we claim to have the final interpretation of these pieces. That’s why
        we invite every visitor to contribute to the discussion by commenting
        the exhibited works. Visit the exhibition -&gt;
        natural-habitat.com/exhibition
        <a href="http://natural-habitat.com/exhibition">
          http://natural-habitat.com/exhibition
        </a>
        Best, Alex
      </chakra.div>
    </Flex>
  );
};

export default Kalin;
