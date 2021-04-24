export const ACTION_TYPES = {
  CHANGE_THEME: "CHANGE_THEME"
}

const changeThemeAction = theme => ({
  type: ACTION_TYPES.CHANGE_THEME,
  payload: theme
})

export function changeTheme(theme) {
  return dispatch => {
    dispatch(changeThemeAction(theme))
  }
}