function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

Tile.prototype.getNote = function() {
  const notes = {
    2: 'Sa',
    4: 'Re',
    8: 'Ga',
    16: 'Ma',
    32: 'Pa',
    64: 'Dha',
    128: 'Ni',
    256: 'Sa\'',
    512: 'Re\'',
    1024: 'Ga\'',
    2048: 'Ma\''
  };
  return notes[this.value] || this.value;
};
