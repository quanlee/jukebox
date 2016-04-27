var parseNote = function(string)
{
  var note = {};
  var ar = string.split("*");
  if(ar.length == 1)
    note.beats = 1
  else {
    note.beats = parseInt(ar[1]);
  }
  note.pitch = ar[0];
  return note;
}

var parseSong = function(string)
{
  var notes = [];
  var ar = string.split(" ");
  for(var ix = 0, len = ar.length; ix < len; ix++)
  {
    notes.push(parseNote(ar[ix]));
  }
  return notes;
}

var button_clicked = function()
{
  console.log("inside button_click");
  var notes = parseSong(document.getElementById("txt_songnotes").value);
  var bpm = document.getElementById("txt_bpm").value;
  $("#btn_play").val("playing...").attr("disabled",true);
  playSong(notes, bpm, song_completed);
}

var song_completed = function()
{
  $("#btn_play").val("play").attr("disabled", false);
}

var page_init = function()
{
  $("#btn_play").on("click", button_clicked);
}

$(window).load(page_init);
