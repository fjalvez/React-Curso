import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter";
import LoadingQuote from "./LoadingQuote";
import Quote from "./Quote";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter();

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];


    if (isLoading) {

        return (
            <h1>Cargando...</h1>
        );
    }

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading ? (
                    < LoadingQuote />
                ) : (
                    < Quote quote={quote} author={author} />
                )
            }

            <button className="btn btn-primary"
                onClick={() => increment(1)}
                disabled={isLoading}>
                Siguiente Cita
            </button>
        </>
    )
}
