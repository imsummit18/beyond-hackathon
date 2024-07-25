'use client';

import {
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { VotingSchemaType } from '../hooks/use-select-winner-form';
import { UseFormReturn } from 'react-hook-form';

interface SelectOption {
  value: number;
  label: string;
}

export type FormFieldT = 'first' | 'second' | 'third' | 'fourth' | 'fifth';

interface ContextType {
  handleSelectChange: (val1: any, val2: any, form: any) => void;
  onSubmit: (data: VotingSchemaType) => void;
  selectedParticipants: Record<string, SelectOption | null>;
  participantsList: SelectOption[];
  openEmail: boolean;
  setOpenEmail: React.Dispatch<SetStateAction<boolean>>;
}

const VotingContext = createContext<ContextType | null>(null);

export function VotingProvider({
  children,
  participants,
}: {
  children: React.ReactNode;
  participants: SelectOption[];
}) {
  const [openEmail, setOpenEmail] = useState(false);

  const [participantsList, setParticipantsList] =
    useState<SelectOption[]>(participants);

  const [selectedParticipants, setSelectedParticipants] = useState<
    Record<string, SelectOption | null>
  >({
    first: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null,
  });

  useEffect(() => {
    const usedValues = Object.values(selectedParticipants)
      .filter(Boolean)
      .map((participant) => participant!.value);
    const newParticipantsList = participants.filter(
      (participant) => !usedValues.includes(participant.value)
    );
    setParticipantsList(newParticipantsList);
  }, [selectedParticipants, participants]);

  const handleSelectChange = useCallback(
    (
      fieldName: FormFieldT,
      selectedOption: SelectOption,
      form: UseFormReturn<VotingSchemaType, any, undefined>
    ) => {
      setSelectedParticipants((prevState) => ({
        ...prevState,
        [fieldName]: selectedOption,
      }));
      form.setValue(fieldName, selectedOption);
      form.clearErrors(fieldName);
    },
    []
  );

  const onSubmit = useCallback((data: VotingSchemaType) => {
    setOpenEmail(true);
  }, []);

  const values = useMemo(
    () => ({
      handleSelectChange,
      onSubmit,
      selectedParticipants,
      participantsList,
      openEmail,
      setOpenEmail,
    }),
    [
      handleSelectChange,
      onSubmit,
      selectedParticipants,
      participantsList,
      openEmail,
      setOpenEmail,
    ]
  );

  return (
    <VotingContext.Provider value={values}>{children}</VotingContext.Provider>
  );
}

export function useVotingContext() {
  return useContext(VotingContext) as ContextType;
}
