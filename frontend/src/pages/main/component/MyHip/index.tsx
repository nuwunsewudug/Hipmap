import { useMediaQuery } from "@material-ui/core";
import { useEffect, useState } from "react";
import Card from "../../../../components/card/Card";
import { useFetchBookMark, useFetchMyShorts } from "../../../../hoc/useFetch";
import {
  MyHipCardFont,
  MyHipContainerDiv,
  MyHipContentDiv,
} from "../../styles/MyHip";
import MyHipContent from "./myHipContent";

const MyHipContainer = ({ username }: { username: string }) => {
  const [myHipData, setMyHipData] = useState<
    {
      shortsId: number;
      thumbnailSrc: string;
      nickname: string;
    }[]
  >();
  const { data: myShorts } = useFetchMyShorts(username);
  const { data: bookmark } = useFetchBookMark();
  const isMobile = useMediaQuery("(max-width:1024px)");
  useEffect(() => {
    if (bookmark) {
      setMyHipData(bookmark);
    }
  }, [bookmark]);

  return (
    <MyHipContainerDiv>
      <Card
        width="90vw"
        height={isMobile ? "35vh" : "48vh"}
        background="linear-gradient(92.79deg,#FFC23C,#EA047E)"
      >
        <div>
          <MyHipCardFont>My HIP</MyHipCardFont>
          <div>
            {myHipData !== undefined && (
              <MyHipContentDiv>
                <MyHipContent content={myHipData} text="북마크" />
                {myShorts && (
                  <MyHipContent content={myShorts} text="최근 등록한 장소" />
                )}
              </MyHipContentDiv>
            )}
          </div>
        </div>
      </Card>
    </MyHipContainerDiv>
  );
};

export default MyHipContainer;
