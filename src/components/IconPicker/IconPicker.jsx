import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import Icon from "@mdi/react";
import {scDark as sc} from "styles/constant"
import {
  mdiAccountGroup,
  mdiAlarm,
  mdiBookOpenPageVariantOutline,
  mdiBrain,
  mdiCamera,
  mdiCar,
  mdiCashMultiple,
  mdiCellphoneErase,
  mdiChat,
  mdiChefHat,
  mdiClockTimeEightOutline,
  mdiDraw,
  mdiDumbbell,
  mdiEmoticonExcited,
  mdiEye,
  mdiFinance,
  mdiGoogleController,
  mdiHandHeart,
  mdiHanger,
  mdiHeartMultiple,
  mdiHospitalBoxOutline,
  mdiLaptop,
  mdiMeditation,
  mdiMotorbike,
  mdiMusicClefTreble,
  mdiPalette,
  mdiPaw,
  mdiPen,
  mdiRunFast,
  mdiShieldPlus,
  mdiShower,
  mdiSleep,
  mdiWalk,
  mdiPill
} from '@mdi/js';


const IconPicker = (props) => {
  const styles = theme => ({
    iconSelect: {
      height: 40,
      width: 40,
      marginRight: 12,
      marginBottom: 12,
      borderRadius: theme.borderRadius.sm,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",

    },
    iconSelected: {
      background: theme.focusFilter
    },
    iconPicker: {
      display: "flex",
      marginTop: 16
    }
  })

  const useStyles = makeStyles(styles)

  const classes = useStyles()

  const icons = [
    mdiAccountGroup, mdiAlarm, mdiBookOpenPageVariantOutline, mdiBrain, mdiCamera, mdiCar, mdiCashMultiple, mdiCellphoneErase, mdiChat, mdiChefHat, mdiClockTimeEightOutline,
    mdiDraw, mdiDumbbell, mdiEmoticonExcited, mdiEye, mdiFinance, mdiGoogleController, mdiHandHeart, mdiHanger, mdiHeartMultiple, mdiHospitalBoxOutline, mdiLaptop, mdiMeditation,
    mdiMotorbike, mdiMusicClefTreble, mdiPalette, mdiPaw, mdiPen, mdiRunFast, mdiShieldPlus, mdiShower, mdiSleep, mdiWalk, mdiPill
  ]
  const initialIcon = props.value || icons[0]
  const [selectedIcon, setSelectedIcon] = useState(initialIcon)
  useEffect(() => {
    props.onChange(selectedIcon)
  }, [])
  const handleClick = (icon) => {
    setSelectedIcon(icon)
    props.onChange(icon)
  }
  return (
    <Grid container className={classes.iconPicker}>
      {icons.map((icon, index) => {
        return (
          <Grid item key={index} className={classes.iconSelect + " " + `${selectedIcon === icon && classes.iconSelected}` } onClick={() => handleClick(icon)}>
            <Icon path={icon}
                  size={1}
                  color={ props.color || sc.color.grey}
            />
          </Grid>
        )
      })}
    </Grid>
  );
}

export default IconPicker