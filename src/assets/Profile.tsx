interface Props{
      image:string,
      alt:string
}
const Profile = ({image,alt} : Props) => {
  return (
    <div>
      <img src={image} alt={alt} />
    </div>
  );
};

export default Profile;
