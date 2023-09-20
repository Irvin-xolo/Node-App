const [state, setState] = useState({
    multiplicador: 1 //6
})

const getResult = useCallback(
    (numero) => {
        //Tu codigo 
        //Your code here
        //Return
        return state.multiplicador * numero //3//
    },
    [] //Lista de dependencias.

)

const resultFactorial = useMemo(
    function(){
        let total = 1;
        let start = 1;
        for(let i=0; i< resultFactorial; 1++){
            total = total *1
        }
            return total
    },
    []
)

console.log(total)


useEffect(
    function(){

    },
    []
)