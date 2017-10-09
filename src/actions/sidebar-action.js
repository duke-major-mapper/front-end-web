
export const dockTriggered = () => {
  return {
    type: "DOCK_TRIGGERED"
  }
}

export const buttonTriggered = () => {
  return {
    type: "BUTTON_PRESS"
  }
}

export const majorChanged = (major_num, newMajor) => {
  const type = "MAJOR" + major_num + "_CHANGE"
  return {
    type: type,
    major: newMajor
  }
}
