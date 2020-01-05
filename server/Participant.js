class Participant {
  /**
   * @type {boolean}
   */
  isBust = false;

  /**
   * @type {*[]}
   */
  actionsAvailable = [];

  /**
   * @type {Card[]}
   */
  hand = [];

  /**
   * @param {string} id
   * @param {string} name
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export { Participant };
