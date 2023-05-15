import { API_ENDPOINT } from "../utils/constants";

export async function getPokemonsApi(endpointUrl: string | null) {
  try {
    const url = `${API_ENDPOINT}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl ? endpointUrl : url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(url: string) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailByIdApi(id: number | undefined) {
  try {
    const url = `${API_ENDPOINT}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
