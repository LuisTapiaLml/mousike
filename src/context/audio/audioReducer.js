import { 
    CARGAR_AUDIO, 
    LOAD_PLAYLIST, 
    LOAD_PLAYLIST_INFO, 
    NEXT_AUDIO, 
    PAUSE_AUDIO, 
    PLAY_AUDIO 
} from "../../types/types";

const audioReducer = ( state = {} , action ) => {

    switch (action.type) {

            
        case LOAD_PLAYLIST :
            
            if(state?.audioinfo?.id ) state.audio.pause();

            return{
                ...state,
                playlist : action.payload ,
                audioinfo : action.payload[0],
                audio : new Audio(action.payload[0].preview),
            }

        case CARGAR_AUDIO :

            if(state?.audioinfo?.id ) state.audio.pause();
    
            return{
                ...state,
                audioinfo : action.payload,
                audio : new Audio(action.payload.preview),
            }

        case PLAY_AUDIO:

            state.audio.play();

            return{
                ...state,
                playing : true,
            }

        case PAUSE_AUDIO:

            state.audio.pause();

            return{
                ...state,
                playing : false,
            }

        case NEXT_AUDIO :
            
            return{
                ...state
            }

        case LOAD_PLAYLIST_INFO :
            return {
                ...state ,
                loadedplaylistinfo : action.payload
            }

        default:
            return state;
    }

}


export default audioReducer; 