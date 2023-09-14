import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const TrackComponent = () => {
  const [articleId, setArticleId] = useState("");
  const navigate = useNavigate();

  const handleTrackClick = async () => {
    try {
      navigate(`/tracking/${encodeURIComponent(articleId)}`);
    } catch (error) {
      console.error("Error:", error);
      // Handle error here
    }
    //RGL104183114
    //UMS64043764
    //UMS64043765
    //UMS64043766
    //UMS64043767
  };

  return (
    <Stack w={"100%"}>
      <FormControl
        w={{ base: "100%", sm: "70%" }}
        m={"auto"}
        p={"auto"}
        mt={"0"}
      >
        <form onSubmit={handleTrackClick}>
          <HStack>
            <Input
              type="text"
              fontSize={"20px"}
              borderColor={"black.200"}
              focusBorderColor="#ED1B24"
              transform="skewX(-10deg)"
              borderRadius={"none"}
              placeholder="Article ID"
              required
              value={articleId}
              onChange={(e) => setArticleId(e.target.value)}
              h={{ base: "30px", sm: "40px" }}
            />

            <Button
              backgroundColor={"#ED1B24"}
              type="submit"
              color={"white"}
              p={{ base: "1", sm: "2" }}
              fontSize={{ base: "xl", sm: "3xl" }}
              fontWeight={{ base: "400", sm: "600" }}
              h={{ base: "30px", sm: "40px" }}
              transform="skewX(-10deg)"
              borderRadius={"none"}
              css={{
                "&:hover": {
                  backgroundColor: "#ca242d",
                },
              }}
            >
              <AiOutlineSearch color="white" size={"40"} />
            </Button>
          </HStack>
        </form>
        <FormLabel my={"5px"} fontWeight={"bold"}>
          Search or Track Packages
        </FormLabel>
      </FormControl>
    </Stack>
  );
};

export default TrackComponent;
