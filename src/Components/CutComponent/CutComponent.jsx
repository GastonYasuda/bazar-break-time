import Form from 'react-bootstrap/Form';

const CutComponent = ({ horasTrabajo }) => {

    return (
        <>
            <div>
                <h6>Tiempo de almuerzo {horasTrabajo}</h6>
            </div>
            {horasTrabajo === 60 &&
                <Form>
                    <div key={`default-checkbox`} className="mb-3">
                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`dividido-checkbox`}
                            label={`Dos de 30?`}
                        />
                    </div>
                </Form>
            }
        </>
    )
}

export default CutComponent
