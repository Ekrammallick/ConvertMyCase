
export default function Alert (props){
return( 
 props.alert && <div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`} role="alert">
  <strong>{`!${props.alert.type}`} </strong> {props.alert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
)

}