/**
 * Created by Jimmy Lan
 * Creation Date: 2020-11-09
 */
import React, { FunctionComponent, PropsWithChildren } from "react";
import { Typography } from "@material-ui/core";

import { FeatureContainer } from "../FeatureContainer";
import { useStyles } from "./FeatureContainerWithHeader.style";
import clsx from "clsx";

interface OwnProps {
  headerTitle: string;
  flexibleHeight?: boolean;
  className?: string;
}

type Props = OwnProps;

const FeatureContainerWithHeader: FunctionComponent<Props> = ({
  headerTitle,
  flexibleHeight,
  className,
  children,
}: PropsWithChildren<Props>) => {
  const classes = useStyles();

  return (
    <FeatureContainer
      className={clsx(className, classes.root, {
        [classes.fullHeight]: !flexibleHeight,
      })}
    >
      <div className={classes.header}>
        <Typography variant="subtitle1">{headerTitle}</Typography>
      </div>
      {children}
    </FeatureContainer>
  );
};

export { FeatureContainerWithHeader };
