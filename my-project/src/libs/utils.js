export const cards = [
  ...MountDeck("paus"),
  ...MountDeck("ouros"),
  ...MountDeck("copas"),
  ...MountDeck("espadas"),
];

export function MountDeck(type) {
  return [
    { value: 1, name: "um", type },
    { value: 2, name: "dois", type },
    { value: 3, name: "tres", type },
    { value: 4, name: "quatro", type },
    { value: 5, name: "cinco", type },
    { value: 6, name: "seis", type },
    { value: 7, name: "sete", type },
    { value: 8, name: "oito", type },
    { value: 9, name: "nove", type },
    { value: 10, name: "dez", type },
    { value: 10, name: "valete", type },
    { value: 10, name: "dama", type },
    { value: 10, name: "rei", type },
    { value: 1 | 11, name: "a", type },
  ];
}
