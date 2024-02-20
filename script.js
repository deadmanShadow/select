function enableSecondButtonOG() {
    const enabledButtonAfter = document.getElementById("enabledButtonAfter");
    const secondButtonAfter = document.getElementById("secondButtonAfter");
  
    if (enabledButtonAfter.value === "yes") {
      secondButtonAfter.disabled = false;
    } else {
      secondButtonAfter.disabled = true;
    }
  }