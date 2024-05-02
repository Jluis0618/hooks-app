import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { Loading } from "../03-examples/components/Loading";
import { Character } from "../03-examples/components/Character";

export const Layout = () => {

  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  console.log({ data, isLoading, hasError });

  const {image, name} = !!data && data;
  return (
    <>
      <h1>Rick and Morthy Character</h1>
      <hr />

      {
        isLoading ? <Loading /> : <Character image={image} name={name}/>
      }


      <button className="btn btn-primary" onClick={increment} disabled={isLoading}>
        Next Character
      </button>
    </>
  );
};