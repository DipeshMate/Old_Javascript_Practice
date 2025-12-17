import { useEffect, useState } from "react";
import {VStack, HStack,Box,Container, Button, Input } from "@chakra-ui/react";
import Message from "../src/Component/Message.jsx"
import {onAuthStateChanged,getAuth,GoogleAuthProvider,signInWithPopup,signOut} from 'firebase/auth'
import { myfirebase } from "./Component/Firebase.jsx";
import {addDoc, collection, getFirestore, serverTimestamp} from "firebase/firestore";


const auth = getAuth(myfirebase);

//getting database from firestore
const db = () => getFirestore(myfirebase);


const loginhandler = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
}

const logoutHandler = () => signOut(auth);

function App() {
  
  const [user, setUser] = useState(false);
  const [message, setMessage] = useState("");
  
  const submitHandler= async(e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Messages"), {
        text: message,
        uid: user.uid,
        uri: user.photoURL,
        createdAt: serverTimestamp()
      });
      setMessage("");
    } catch (error) {
      alert(error);
      
    }
  }

  useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (data) => {
      setUser(data);
  })
    return () => {
      unsubscribe();
    }
  })

  return (
    <Box bg={"pink.200"}>
      {user ? (
         <Container bg={"white"} h={"100vh"} >
         <VStack h={"full"} w={"full"}  py={"4"} >
 
           <Button bg={"red.500"} w={"full"} color={"white"} onClick={logoutHandler}>LogOut</Button>
 
           <VStack h={"full"} w={"full"} overflow={"auto"}>
             <Message text={"Sample Message"} />
             <Message user={"me"} text={"mera Message"} />
   
           </VStack>
             
           <form onSubmit={submitHandler} style={ {width:"100%"}}>
               <HStack>
             <Input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Enter a Message"/> 
             <Button colorScheme={"purple"}type="submit">Send</Button>
               </HStack>
            </form>
          
 
         </VStack>
       </Container>
      ) : 
        <VStack justifyContent={"center"} h="100vh">
          <Button onClick={loginhandler}>Sign in With Google</Button>
        </VStack>
      
      }
    </Box>
  );
}

export default App;
