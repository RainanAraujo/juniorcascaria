import firebase from "./firebase";
const firestore = firebase.firestore();

const registered = firestore.collection("registered");
const competitors = firestore.collection("competitors");

export interface Address {
    city: string,
    district: string,
    numberAddress: string,
    details: string
}

export const registerCompetitor = (fullName: string, artisticName: string, CPF: string, phoneNumber: string, videoURL: string, address: Address) => {
    return new Promise<any>((resolve, reject) => {
        registered.add({
            fullName,
            artisticName,
            CPF,
            phoneNumber,
            videoURL,
            address
        })
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    });
}

export const registerVote = (competitorID: string, authToken: string) => {
    return new Promise<any>((resolve, reject) => {
        competitors.doc(competitorID).update({
            votes: firebase.firestore.FieldValue.increment(1),
        })
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
}