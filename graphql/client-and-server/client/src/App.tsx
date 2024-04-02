import React, { useState } from "react";
import { createClient, Provider, useQuery } from "urql";
import { dedupExchange, cacheExchange, fetchExchange, errorExchange } from '@urql/core';

const client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [
    dedupExchange,
    cacheExchange,
    errorExchange({
      onError: (error) => {
        console.error(error);
      }
    }),
    fetchExchange
  ]
});

const countriesQuery = `
  query allCountries {
    countries {
      name
    }
  }
`;

type Country = {
  name: string;
};

const Countries = () => {
  const [result] = useQuery({
    query: countriesQuery
  });
  const [countryName, setCountryName] = useState<string | null>(null);

  if (result.fetching) return <p>Loading...</p>;
  if (result.error) return <p>Error: {result.error.message}</p>;

  return (
    <div>
      {result.data && result.data.countries.map((country: Country) => (
        <div key={country.name} onClick={() => setCountryName(country.name)}>
          {country.name}
        </div>
      ))}
      {countryName && <p>Selected Country: {countryName}</p>}
    </div>
  );
};

const App = () => {
  return (
    <Provider value={client}>
      <div>
        <h1>URQL Example</h1>
        <Countries />
      </div>
    </Provider>
  );
};

export default App;
