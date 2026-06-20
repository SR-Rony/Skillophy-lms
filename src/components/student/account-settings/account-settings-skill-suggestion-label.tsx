interface AccountSettingsSkillSuggestionLabelProps {
  skill: string;
  query: string;
}

export function AccountSettingsSkillSuggestionLabel({
  skill,
  query,
}: AccountSettingsSkillSuggestionLabelProps) {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return <span>{skill}</span>;
  }

  const lowerSkill = skill.toLowerCase();
  const lowerQuery = trimmedQuery.toLowerCase();
  const matchIndex = lowerSkill.indexOf(lowerQuery);

  if (matchIndex === -1) {
    return <span>{skill}</span>;
  }

  const before = skill.slice(0, matchIndex);
  const match = skill.slice(matchIndex, matchIndex + trimmedQuery.length);
  const after = skill.slice(matchIndex + trimmedQuery.length);

  return (
    <span>
      {before}
      <span className="font-semibold text-[#1a1a1a]">{match}</span>
      {after}
    </span>
  );
}
