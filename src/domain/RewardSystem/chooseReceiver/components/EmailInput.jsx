import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const InputBox = styled.input`
  width: 17px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 3.638px;
  border: 0.8px solid #ababab;
  margin-right: 5px;
`;

const Hyphen = styled.span`
  margin-right: 5px;
`;

const Email = styled.span`
  color: rgba(105, 109, 114, 0.8);
  font-size: 16px;
  letter-spacing: 0.32px;
`;

function EmailInput() {
  const { control } = useForm();

  return (
    <form>
      <InputContainer>
        {[...Array(7)].map((_, index) => (
          <Controller
            key={index}
            name={`emailBoxes[${index}]`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputBox type="text" {...field} maxLength={1} />
            )}
          />
        ))}
        <Hyphen>-</Hyphen>
        <Controller
          name="emailBoxes[7]"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <InputBox type="text" {...field} maxLength={6} />
          )}
        />
        <Email>@timewallet.com</Email>
      </InputContainer>
    </form>
  );
}

export default EmailInput;
