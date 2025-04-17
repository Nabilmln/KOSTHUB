const getGenderString = (gender: boolean | undefined) => {
  return gender === true ? "Laki" : "Perempuan";
};
export default getGenderString;
