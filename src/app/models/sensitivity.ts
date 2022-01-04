export class Sensitivity {

  private _questionId: number;
  private _gameName: string;
  private _sensitivityValue: number;
  private _resolutionValue: string;
  private _playerName: string;


  constructor(questionId: number, gameName: string, sensitivityValue: number, resolutionValue: string, playerName: string) {
    this._questionId = questionId;
    this._gameName = gameName;
    this._sensitivityValue = sensitivityValue;
    this._resolutionValue = resolutionValue;
    this._playerName = playerName;
  }


  get questionId(): number {
    return this._questionId;
  }

  set questionId(value: number) {
    this._questionId = value;
  }

  get gameName(): string {
    return this._gameName;
  }

  set gameName(value: string) {
    this._gameName = value;
  }

  get sensitivityValue(): number {
    return this._sensitivityValue;
  }

  set sensitivityValue(value: number) {
    this._sensitivityValue = value;
  }

  get resolutionValue(): string {
    return this._resolutionValue;
  }

  set resolutionValue(value: string) {
    this._resolutionValue = value;
  }

  get playerName(): string {
    return this._playerName;
  }

  set playerName(value: string) {
    this._playerName = value;
  }

  toString(): string {
    return this.questionId + this.resolutionValue + this.sensitivityValue + this.playerName;
  }
}
