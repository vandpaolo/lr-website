import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ReactComponent as CustomIconSVG } from '../assets/icons/HeaderLogo.svg'; // Adjust path as needed

const CustomLogoIcon = (props: SvgIconProps): JSX.Element => {
  const theme = useTheme();

  return (
    <SvgIcon
      {...props}
      sx={{
        ...props.sx,
        color:
          theme.palette.mode === 'dark'
            ? theme.palette.primary.main
            : theme.palette.success.dark,
      }}
    >
      <CustomIconSVG />
    </SvgIcon>
  );
};

export default CustomLogoIcon;
