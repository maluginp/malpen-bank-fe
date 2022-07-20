import { FormEventHandler, useState } from "react"
import { useInput } from "../hooks/useInput"
import * as Icon from 'react-bootstrap-icons';

interface EditableTextProps {
  text: string
  onChanged: (text: string) => void
  className: string
}

const EditableText: React.FC<EditableTextProps> = ({
  text,
  onChanged,
  className,
}) => {
  const [isEdit, setEdit] = useState(false)
  const field = useInput(text)

  const handleClick: FormEventHandler = () => {
    setEdit(false)
    onChanged(field.value)
  }

  if (isEdit) {
    return (
      <div className="row g-3">
        <div className="col-8">
        <input
          type={text}
          className="form-control"
          {...field} />
          </div>

        <div className="col-4">
            <button type="button" className="btn btn-primary mb-3" onClick={handleClick}>Сохранить</button>
          </div>
      </div>
    )
  }

  return (<div className="d-flex align-items-center">
    <span className={className}>{field.value}</span>
    <Icon.PencilSquare className="ps-2" onClick={() => setEdit(true)} size={24}/>
  </div>)

}


export default EditableText