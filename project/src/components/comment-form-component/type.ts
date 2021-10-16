import {ChangeEvent} from 'react';

type CommentFormProps = {
  star: {score: string, titleName: string},
  starsCount: string,
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void,
}

export type {CommentFormProps};
