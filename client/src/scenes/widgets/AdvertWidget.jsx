import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://social-media-mern-server.vercel.app/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>RubyJewellers</Typography>
        <Typography color={medium}>buyruby.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Discover stunning, handcrafted jewelry made with precision and passion.
        From classic designs to modern styles, we have something to suit every
        taste and occasion. Shop our collection today and add a touch of
        elegance to your everyday look or make a statement with a dazzling piece
        for that special occasion.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
