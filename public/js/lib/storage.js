import {
  INITIAL_STORAGE,
  STORAGE_NAME,
  INITIAL_ID,
  INCREMENT_STEP,
} from "./constants.js";

class Storage {
  name;
  storage;
  constructor(StorageName = STORAGE_NAME) {
    this.name = StorageName;
    this.storage = localStorage.getItem(this.getItem); //String
  }

  get() {
    if (!this.storage) return INITIAL_STORAGE; //null이나 아니냐
    return JSON.parse(this.storage);
  }

  set(item) {
    const storage = this.get();
    const serialize = JSON.stringify([...storage, item]);
    localStorage.setItem(this.name, serialize); //데이터 저장
  }

  delete(id) {
    const storage = this.get();
    const newStorage = storage.filter((row) => row.id !== parseInt(id));
    const serialize = JSON.stringify(newStorage);
    localStorage.setItem(this.name, serialize); //데이터 변경
  }

  // 마지막 아이템 가져오기
  getLatestItem() {
    const latestRow = this.get().pop();
    return latestRow;
  }

  getById(id) {
    return this.get().find((row) => row.id === parseInt(id));
  }

  incrementId() {
    const row = this.getLatestItem();
    if (!row) return INITIAL_ID;
    return row.id + INCREMENT_STEP;
  }

  clear() {
    localStorage.setItem(this.name, `[]`);
  }
}

export default Storage;
