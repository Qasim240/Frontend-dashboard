// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
});




function exportData() {
    // Get the table element
    var table = document.getElementById("dataTable");
  
    // Create a CSV string from the table data
    var csv = [];
    for (var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];
        var rowData = [];
        for (var j = 0; j < row.cells.length; j++) {
            rowData.push(row.cells[j].innerText);
        }
        csv.push(rowData.join(","));
    }
    csv = csv.join("\n");
  
    // Create a temporary download link and trigger a download
    var link = document.createElement("a");
    link.setAttribute(
        "href",
        "data:text/csv;charset=utf-8," + encodeURIComponent(csv)
    );
    link.setAttribute("download", "data.csv");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  
  
   // select
   document.getElementById('selectAll').addEventListener('change', function () {
      let checkboxes = document.getElementsByTagName('input');
      for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].type == 'checkbox') {
              checkboxes[i].checked = this.checked;
          }
      }
  });
