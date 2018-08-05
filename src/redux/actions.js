
import * as firebase from "firebase";

export const firebaseDataSnap ={
  firebaseDataSnap(){
    this.firebaseRef = firebase.database().ref('todos');
    this.firebaseCallback = this.firebaseRef.on('value', (snap) => {      
      this.setState({ todos: snap.val() });
    });
  }
}
