<script>
(function() {
  window.addEventListener('load', function() {
    addFormattingFunctions("field142687860", "field141418346_confirm", "formatTAX", "backspaceTAX", 10);
    addFormattingFunctions("field142688240", "field142688240_confirm", "formatSSN", "backspaceSSN", 11);
    addFormattingFunctions("field142688532", "field142688532_confirm", "formatSSN", "backspaceSSN", 11);
    addFormattingFunctions("field142688625", "field142688625_confirm", "formatSSN", "backspaceSSN", 11);
  });

  function addFormattingFunctions(input1Id, input2Id, oninputFunction, onkeydownFunction, maxLength) {
    let input1 = document.getElementById(input1Id);
    let input2 = document.getElementById(input2Id);
    input1.setAttribute("oninput", oninputFunction + "(this)");
    input1.setAttribute("onkeydown", onkeydownFunction + "(event, this)");
    input2.setAttribute("oninput", oninputFunction + "(this)");
    input2.setAttribute("onkeydown", onkeydownFunction + "(event, this)");
    input1.setAttribute("maxlength", maxLength);
    input2.setAttribute("maxlength", maxLength);
  }

  function formatTAX(input) {
    formatInput(input, [2], 10);
  }

  function formatSSN(input) {
    formatInput(input, [3, 6], 11);
  }

  function formatInput(input, dashPositions, maxLength) {
    let value = input.value.replace(/\D/g, '');
    dashPositions.forEach(function(pos) {
      if (value.length > pos) {
        value = value.slice(0, pos) + '-' + value.slice(pos);
      }
    });
    value = value.slice(0, maxLength);
    input.value = value;
  }

  function backspaceTAX(event, input) {
    backspaceDash(event, input, [3]);
  }

  function backspaceSSN(event, input) {
    backspaceDash(event, input, [4, 7]);
  }

  function backspaceDash(event, input, dashPositions) {
    if (event.key === 'Backspace') {
      let pos = input.selectionStart;
      let value = input.value;
      dashPositions.forEach(function(dashPos) {
        if (pos == dashPos) {
          value = value.slice(0, pos - 2) + value.slice(pos);
          input.value = value;
          input.setSelectionRange(pos - 1, pos - 1);
        }
      });
    }
  }
})();
</script>
