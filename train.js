<!DOCTYPE html>
<html>
<script><
const buildDefinitionList = (mass) => {
  for (const element of mass) {
    for (const innerElement of element) {
      innerElement[0] = `<dt>${innerElement[0]}</dt>`
      innerElement[1] = `<dd>${innerElement[1]}</dd>}`
    }
  }
  const result = `<dl>${mass.join()}</dl>`;
  return result;
}
;
/script></script>
</html>